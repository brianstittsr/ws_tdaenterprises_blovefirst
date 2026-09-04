"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Play,
  Search,
  Clock,
  BookOpen,
  HardHat,
  Factory,
  Heart,
  Wrench,
  Loader2,
} from "lucide-react";
import { getCourses, CourseDoc } from "@/lib/firebase-lms";

// Fallback courses for when Firestore is empty
const fallbackCourses = [
  {
    id: "1",
    title: "OSHA 10-Hour Construction",
    description: "Foundation-level safety training covering common construction hazards, worker rights, and employer responsibilities.",
    category: "OSHA Construction",
    categorySlug: "osha-construction",
    duration: "10 hours",
    lessons: 12,
    level: "Beginner",
    slug: "osha-10-construction",
    isFeatured: true,
    enrollmentCount: 156,
    thumbnailUrl: "https://images.pexels.com/photos/37635943/pexels-photo-37635943.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
  },
  {
    id: "2",
    title: "OSHA 30-Hour Construction",
    description: "Comprehensive construction safety outreach training with in-depth coverage of OSHA standards and hazard mitigation.",
    category: "OSHA Construction",
    categorySlug: "osha-construction",
    duration: "30 hours",
    lessons: 21,
    level: "Advanced",
    slug: "osha-30-construction",
    isFeatured: true,
    enrollmentCount: 89,
    thumbnailUrl: "https://images.pexels.com/photos/8961027/pexels-photo-8961027.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
  },
  {
    id: "3",
    title: "OSHA 10-Hour General Industry",
    description: "Safety essentials for manufacturing, warehousing, healthcare, and other general industry settings.",
    category: "OSHA General Industry",
    categorySlug: "osha-general-industry",
    duration: "10 hours",
    lessons: 11,
    level: "Beginner",
    slug: "osha-10-general-industry",
    enrollmentCount: 124,
    thumbnailUrl: "https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
  },
  {
    id: "4",
    title: "OSHA 30-Hour General Industry",
    description: "Advanced safety training for general industry supervisors and managers covering OSHA standards in depth.",
    category: "OSHA General Industry",
    categorySlug: "osha-general-industry",
    duration: "30 hours",
    lessons: 22,
    level: "Advanced",
    slug: "osha-30-general-industry",
    enrollmentCount: 76,
    thumbnailUrl: "https://images.pexels.com/photos/36398150/pexels-photo-36398150.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
  },
  {
    id: "5",
    title: "First Aid / CPR / AED",
    description: "Life-saving skills training tailored to workplace emergencies, including CPR and automated external defibrillator use.",
    category: "Safety Certification",
    categorySlug: "safety-certification",
    duration: "4 hours",
    lessons: 8,
    level: "Beginner",
    slug: "first-aid-cpr-aed",
    isFeatured: true,
    enrollmentCount: 203,
    thumbnailUrl: "https://images.pexels.com/photos/37277086/pexels-photo-37277086.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
  },
  {
    id: "6",
    title: "Bloodborne Pathogens",
    description: "OSHA-compliant training on exposure control, PPE, and response procedures for bloodborne pathogens.",
    category: "Safety Certification",
    categorySlug: "safety-certification",
    duration: "2 hours",
    lessons: 6,
    level: "Beginner",
    slug: "bloodborne-pathogens",
    enrollmentCount: 145,
    thumbnailUrl: "https://images.pexels.com/photos/8460400/pexels-photo-8460400.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
  },
  {
    id: "7",
    title: "Aerial Work Platform",
    description: "Safe operation, inspection, and hazard awareness for scissor lifts, boom lifts, and related equipment.",
    category: "Equipment Safety",
    categorySlug: "equipment-safety",
    duration: "6 hours",
    lessons: 9,
    level: "Intermediate",
    slug: "aerial-work-platform",
    enrollmentCount: 91,
    thumbnailUrl: "https://images.pexels.com/photos/16105409/pexels-photo-16105409.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
  },
];

const categories = [
  { name: "All Categories", slug: "all", icon: BookOpen },
  { name: "OSHA Construction", slug: "osha-construction", icon: HardHat },
  { name: "OSHA General Industry", slug: "osha-general-industry", icon: Factory },
  { name: "Safety Certification", slug: "safety-certification", icon: Heart },
  { name: "Equipment Safety", slug: "equipment-safety", icon: Wrench },
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

interface DisplayCourse {
  id: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  duration: string;
  lessons: number;
  level: string;
  slug: string;
  isFeatured?: boolean;
  enrollmentCount: number;
  thumbnailUrl?: string | null;
}

function mapCourseDocToDisplay(course: CourseDoc): DisplayCourse {
  return {
    id: course.id,
    title: course.title,
    description: course.shortDescription || course.description || "",
    category: course.difficultyLevel || "General",
    categorySlug: course.categoryId || "general",
    duration: course.estimatedDurationMinutes 
      ? `${Math.round(course.estimatedDurationMinutes / 60)} hours` 
      : "Self-paced",
    lessons: 0, // Will be calculated separately if needed
    level: course.difficultyLevel || "Intermediate",
    slug: course.slug,
    isFeatured: course.isFeatured,
    enrollmentCount: course.enrollmentCount || 0,
    thumbnailUrl: course.thumbnailUrl,
  };
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<DisplayCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    setLoading(true);
    try {
      const firestoreCourses = await getCourses({ isPublished: true });
      if (firestoreCourses.length > 0) {
        setCourses(firestoreCourses.map(mapCourseDocToDisplay));
      } else {
        // Use fallback courses if no Firestore courses
        setCourses(fallbackCourses as DisplayCourse[]);
      }
    } catch (error) {
      console.error("Error loading courses:", error);
      setCourses(fallbackCourses as DisplayCourse[]);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.categorySlug === selectedCategory;
    const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Course Library</h1>
          <p className="text-muted-foreground text-lg">
            Explore our comprehensive library of EHS training courses designed to keep your team certified, compliant, and safe.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.slug} value={cat.slug}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-full md:w-[150px]">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              {levels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results count */}
        <div className="mb-6 text-sm text-muted-foreground">
          {loading ? "Loading courses..." : `Showing ${filteredCourses.length} of ${courses.length} courses`}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
          </div>
        )}

        {/* Course Grid */}
        {!loading && <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-slate-200 relative overflow-hidden">
                {course.thumbnailUrl ? (
                  <img
                    src={course.thumbnailUrl}
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-slate-900/40" />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-amber-600 ml-1" />
                  </div>
                </div>
                {course.isFeatured && (
                  <Badge className="absolute top-3 left-3 bg-amber-500 text-white">Featured</Badge>
                )}
                <Badge 
                  variant="outline" 
                  className="absolute top-3 right-3 bg-white/90 text-slate-700"
                >
                  {course.level}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Badge variant="outline" className="text-xs">{course.category}</Badge>
                </div>
                <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">{course.enrollmentCount} enrolled</span>
                  </div>
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900" asChild>
                  <Link href={`/academy/courses/${course.slug}`}>
                    View Course
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>}

        {!loading && filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No courses found matching your criteria.</p>
            <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedLevel("All Levels");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

