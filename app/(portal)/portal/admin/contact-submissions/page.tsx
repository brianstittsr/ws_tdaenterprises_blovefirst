"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { COLLECTIONS, ContactSubmissionDoc } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Phone,
  Mail,
  Building,
  MoreHorizontal,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Loader2,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

type SubmissionStatus = "new" | "contacted" | "resolved";

interface Submission extends Omit<ContactSubmissionDoc, "createdAt" | "updatedAt"> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

const statusColors: Record<SubmissionStatus, string> = {
  new: "bg-blue-500",
  contacted: "bg-yellow-500",
  resolved: "bg-green-500",
};

const statusLabels: Record<SubmissionStatus, string> = {
  new: "New",
  contacted: "Contacted",
  resolved: "Resolved",
};

export default function ContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [notes, setNotes] = useState("");
  const [filterStatus, setFilterStatus] = useState<SubmissionStatus | "all">("all");

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, COLLECTIONS.CONTACT_SUBMISSIONS),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Submission[] = snapshot.docs.map((doc) => {
        const d = doc.data();
        return {
          id: doc.id,
          firstName: d.firstName,
          lastName: d.lastName,
          email: d.email,
          phone: d.phone,
          company: d.company,
          serviceInterest: d.serviceInterest,
          message: d.message,
          source: d.source,
          status: d.status,
          notes: d.notes,
          createdAt: d.createdAt?.toDate() || new Date(),
          updatedAt: d.updatedAt?.toDate() || new Date(),
        };
      });
      setSubmissions(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateStatus = async (id: string, newStatus: SubmissionStatus) => {
    if (!db) return;
    setUpdating(true);

    try {
      await updateDoc(doc(db, COLLECTIONS.CONTACT_SUBMISSIONS, id), {
        status: newStatus,
        updatedAt: Timestamp.now(),
      });
      toast.success(`Status updated to ${statusLabels[newStatus]}`);
    } catch (error) {
      console.error("Error updating submission:", error);
      toast.error("Failed to update status");
    } finally {
      setUpdating(false);
    }
  };

  const updateNotes = async (id: string) => {
    if (!db) return;
    setUpdating(true);

    try {
      await updateDoc(doc(db, COLLECTIONS.CONTACT_SUBMISSIONS, id), {
        notes,
        updatedAt: Timestamp.now(),
      });
      toast.success("Notes updated");
    } catch (error) {
      console.error("Error updating notes:", error);
      toast.error("Failed to update notes");
    } finally {
      setUpdating(false);
    }
  };

  const deleteSubmission = async (id: string) => {
    if (!db) return;

    try {
      await deleteDoc(doc(db, COLLECTIONS.CONTACT_SUBMISSIONS, id));
      toast.success("Submission deleted");
      setDetailsOpen(false);
    } catch (error) {
      console.error("Error deleting submission:", error);
      toast.error("Failed to delete submission");
    }
  };

  const openDetails = (submission: Submission) => {
    setSelectedSubmission(submission);
    setNotes(submission.notes || "");
    setDetailsOpen(true);
  };

  const filtered = filterStatus === "all"
    ? submissions
    : submissions.filter((s) => s.status === filterStatus);

  const newCount = submissions.filter((s) => s.status === "new").length;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Contact Submissions</h1>
          <p className="text-muted-foreground">
            Manage contact form submissions from the TDA Enterprise website
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {newCount} New
          </Badge>
          <Select value={filterStatus} onValueChange={(v) => setFilterStatus(v as SubmissionStatus | "all")}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Submissions</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Submission Queue ({filtered.length})</CardTitle>
          <CardDescription>
            Click on a submission to view details and update status
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No submissions found</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Service Interest</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((submission) => (
                  <TableRow
                    key={submission.id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => openDetails(submission)}
                  >
                    <TableCell className="font-medium">
                      {submission.firstName} {submission.lastName}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm">{submission.email}</span>
                        {submission.phone && (
                          <span className="text-xs text-muted-foreground">{submission.phone}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{submission.company || "-"}</TableCell>
                    <TableCell className="text-sm">{submission.serviceInterest || "-"}</TableCell>
                    <TableCell>
                      <Badge className={statusColors[submission.status as SubmissionStatus]}>
                        {statusLabels[submission.status as SubmissionStatus]}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {format(submission.createdAt, "MMM d, yyyy")}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={(e) => { e.stopPropagation(); openDetails(submission); }}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={(e) => { e.stopPropagation(); updateStatus(submission.id, "contacted"); }}>
                            <Phone className="mr-2 h-4 w-4" />
                            Mark Contacted
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={(e) => { e.stopPropagation(); updateStatus(submission.id, "resolved"); }}>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark Resolved
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => { e.stopPropagation(); deleteSubmission(submission.id); }}
                            className="text-destructive"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Submission Details</DialogTitle>
            <DialogDescription>
              View and manage this contact submission
            </DialogDescription>
          </DialogHeader>
          {selectedSubmission && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium text-lg">
                      {selectedSubmission.firstName} {selectedSubmission.lastName}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${selectedSubmission.email}`} className="text-primary hover:underline">
                        {selectedSubmission.email}
                      </a>
                    </p>
                    {selectedSubmission.phone && (
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a href={`tel:${selectedSubmission.phone}`} className="text-primary hover:underline">
                          {selectedSubmission.phone}
                        </a>
                      </p>
                    )}
                    {selectedSubmission.company && (
                      <p className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        {selectedSubmission.company}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Details</h4>
                  <div className="space-y-2 text-sm">
                    {selectedSubmission.serviceInterest && (
                      <p>
                        <span className="text-muted-foreground">Service Interest:</span>{" "}
                        {selectedSubmission.serviceInterest}
                      </p>
                    )}
                    <p className="text-muted-foreground">
                      Submitted: {format(selectedSubmission.createdAt, "PPpp")}
                    </p>
                  </div>
                </div>
              </div>

              {selectedSubmission.message && (
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </h4>
                  <p className="text-sm bg-muted p-3 rounded-md whitespace-pre-wrap">
                    {selectedSubmission.message}
                  </p>
                </div>
              )}

              <div>
                <h4 className="font-semibold mb-2">Update Status</h4>
                <div className="flex gap-2 flex-wrap">
                  {(["new", "contacted", "resolved"] as SubmissionStatus[]).map((status) => (
                    <Button
                      key={status}
                      variant={selectedSubmission.status === status ? "default" : "outline"}
                      size="sm"
                      onClick={() => updateStatus(selectedSubmission.id, status)}
                      disabled={updating}
                    >
                      {statusLabels[status]}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Notes</h4>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add internal notes about this submission..."
                  rows={3}
                />
                <Button
                  className="mt-2"
                  size="sm"
                  onClick={() => updateNotes(selectedSubmission.id)}
                  disabled={updating}
                >
                  {updating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                  Save Notes
                </Button>
              </div>

              <div className="flex justify-between pt-4 border-t">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteSubmission(selectedSubmission.id)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Submission
                </Button>
                <Button variant="outline" onClick={() => setDetailsOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

