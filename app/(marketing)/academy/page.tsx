"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowRight,
  Play,
  Users,
  Award,
  BookOpen,
  Calendar,
  Target,
  TrendingUp,
  Settings,
  ArrowRightLeft,
  CheckCircle,
  Clock,
  Star,
  Loader2,
  HardHat,
  Factory,
  Heart,
  Wrench,
} from "lucide-react";
import {
  getCourses,
  getWorkshops,
  getCategories,
  getAcademyStats,
  type CourseDoc,
  type WorkshopDoc,
  type CategoryDoc,
} from "@/lib/firebase-lms";

// Fallback data for when Firebase is not available
const fallbackCourses = [
  {
    title: "OSHA 10-Hour Construction",
    description: "Foundation-level safety training covering common construction hazards, worker rights, and employer responsibilities.",
    category: "OSHA Construction",
    duration: "10 hours",
    lessons: 12,
    level: "Beginner",
    image: "https://images.pexels.com/photos/37635943/pexels-photo-37635943.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    slug: "osha-10-construction",
    isFeatured: true,
  },
  {
    title: "OSHA 30-Hour Construction",
    description: "Comprehensive construction safety outreach training with in-depth coverage of OSHA standards and hazard mitigation.",
    category: "OSHA Construction",
    duration: "30 hours",
    lessons: 21,
    level: "Advanced",
    image: "https://images.pexels.com/photos/8961027/pexels-photo-8961027.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    slug: "osha-30-construction",
    isFeatured: true,
  },
  {
    title: "OSHA 10-Hour General Industry",
    description: "Safety essentials for manufacturing, warehousing, healthcare, and other general industry settings.",
    category: "OSHA General Industry",
    duration: "10 hours",
    lessons: 11,
    level: "Beginner",
    image: "https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    slug: "osha-10-general-industry",
  },
  {
    title: "OSHA 30-Hour General Industry",
    description: "Advanced safety training for general industry supervisors and managers covering OSHA standards in depth.",
    category: "OSHA General Industry",
    duration: "30 hours",
    lessons: 22,
    level: "Advanced",
    image: "https://images.pexels.com/photos/36398150/pexels-photo-36398150.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    slug: "osha-30-general-industry",
  },
  {
    title: "First Aid / CPR / AED",
    description: "Life-saving skills training tailored to workplace emergencies, including CPR and automated external defibrillator use.",
    category: "Safety Certification",
    duration: "4 hours",
    lessons: 8,
    level: "Beginner",
    image: "https://images.pexels.com/photos/37277086/pexels-photo-37277086.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    slug: "first-aid-cpr-aed",
    isFeatured: true,
  },
  {
    title: "Bloodborne Pathogens",
    description: "OSHA-compliant training on exposure control, PPE, and response procedures for bloodborne pathogens.",
    category: "Safety Certification",
    duration: "2 hours",
    lessons: 6,
    level: "Beginner",
    image: "https://images.pexels.com/photos/8460400/pexels-photo-8460400.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    slug: "bloodborne-pathogens",
  },
  {
    title: "Aerial Work Platform",
    description: "Safe operation, inspection, and hazard awareness for scissor lifts, boom lifts, and related equipment.",
    category: "Equipment Safety",
    duration: "6 hours",
    lessons: 9,
    level: "Intermediate",
    image: "https://images.pexels.com/photos/16105409/pexels-photo-16105409.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    slug: "aerial-work-platform",
  },
];

const fallbackCategories = [
  { id: "osha-construction", name: "OSHA Construction", slug: "osha-construction", icon: HardHat, color: "bg-amber-500", courseCount: 2 },
  { id: "osha-general-industry", name: "OSHA General Industry", slug: "osha-general-industry", icon: Factory, color: "bg-blue-500", courseCount: 2 },
  { id: "safety-certification", name: "Safety Certification", slug: "safety-certification", icon: Heart, color: "bg-red-500", courseCount: 2 },
  { id: "equipment-safety", name: "Equipment Safety", slug: "equipment-safety", icon: Wrench, color: "bg-green-500", courseCount: 1 },
];

const fallbackWorkshops = [
  {
    title: "OSHA 10-Hour Construction Open Enrollment",
    date: "Ongoing - Self-Paced",
    time: "Available 24/7",
    type: "Online Course",
    spots: 25,
  },
  {
    title: "First Aid / CPR / AED Certification Session",
    date: "Bi-weekly",
    time: "8:00 AM CST",
    type: "Live Workshop",
    spots: 15,
  },
  {
    title: "Aerial Work Platform Hands-On Training",
    date: "Monthly",
    time: "9:00 AM CST",
    type: "Live Workshop",
    spots: 10,
  },
];

// Category icon mapping
const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "osha-construction": HardHat,
  "osha-general-industry": Factory,
  "safety-certification": Heart,
  "equipment-safety": Wrench,
};

const CATEGORY_COLORS: Record<string, string> = {
  "osha-construction": "bg-amber-500",
  "osha-general-industry": "bg-blue-500",
  "safety-certification": "bg-red-500",
  "equipment-safety": "bg-green-500",
};

const subscriptionTiers = [
  {
    name: "Individual Learner",
    price: 49,
    period: "month",
    description: "Essential safety training access for individual professionals",
    features: [
      "Access to all OSHA courses",
      "Course completion certificates",
      "Downloadable reference materials",
      "1 free workshop per quarter",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Team Builder",
    price: 149,
    period: "month",
    description: "Comprehensive training for teams and supervisors",
    features: [
      "All Individual features",
      "Full course library access",
      "Team progress dashboards",
      "Pre/Post assessments",
      "OSHA certification programs",
      "Priority workshop registration",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise Safety",
    price: 349,
    period: "month",
    description: "Premium access with custom training and dedicated support",
    features: [
      "All Team Builder features",
      "Custom learning paths",
      "Dedicated safety instructor",
      "On-site training sessions",
      "Compliance audit support",
      "White-glove onboarding",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function AcademyPage() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<CourseDoc[]>([]);
  const [workshops, setWorkshops] = useState<WorkshopDoc[]>([]);
  const [categories, setCategories] = useState<CategoryDoc[]>([]);
  const [stats, setStats] = useState({ totalCourses: 7, totalLessons: 89, totalWorkshops: 3, totalEnrollments: 500, totalCertificates: 0 });
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const [coursesData, workshopsData, categoriesData, statsData] = await Promise.all([
          getCourses({ isPublished: true, isFeatured: true, limitCount: 4 }),
          getWorkshops({ isPublished: true, upcoming: true, limitCount: 3 }),
          getCategories(),
          getAcademyStats(),
        ]);
        setCourses(coursesData);
        setWorkshops(workshopsData);
        setCategories(categoriesData);
        setStats(statsData);
        setUseFallback(false);
      } catch (error) {
        console.error("Error loading academy data:", error);
        // Use fallback data on error
        setUseFallback(true);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Use Firebase data or fallback when there's an error or no data
  const displayCourses = courses.length > 0 ? courses : (useFallback ? fallbackCourses : []);
  const displayWorkshops = workshops.length > 0 ? workshops : (useFallback ? fallbackWorkshops : []);
  const displayCategories = categories.length > 0 ? categories : (useFallback ? fallbackCategories : []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-500/20 text-amber-400 border-amber-500/30">
              TDA Enterprise Academy
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Safety Training That{" "}
              <span className="text-amber-400">Saves Lives</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Access professional EHS certification courses, OSHA training, and safety workshops 
              designed to keep your team compliant, certified, and safe on the job.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="text-lg bg-amber-500 hover:bg-amber-600 text-slate-900" asChild>
                <Link href="/academy/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="#pricing">
                  View Pricing
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-amber-400">{stats.totalCourses || 7}</div>
                <div className="text-gray-400">Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">{stats.totalLessons || 89}+</div>
                <div className="text-gray-400">Lessons</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">{stats.totalWorkshops || 3}+</div>
                <div className="text-gray-400">Workshops</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">{stats.totalEnrollments || 500}+</div>
                <div className="text-gray-400">Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
              <p className="text-muted-foreground">Start your safety training with our most popular programs</p>
            </div>
            <Button variant="ghost" className="text-amber-600" asChild>
              <Link href="/academy/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="aspect-video" />
                  <CardHeader className="pb-2">
                    <Skeleton className="h-4 w-20 mb-2" />
                    <Skeleton className="h-6 w-full" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : displayCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayCourses.map((course: any) => (
                <Card key={course.id || course.slug} className="group overflow-hidden hover:shadow-lg transition-shadow">
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
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Badge variant="outline" className="text-xs capitalize">{course.difficultyLevel}</Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{course.shortDescription || course.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.estimatedDurationMinutes ? `${Math.round(course.estimatedDurationMinutes / 60)}h` : "TBD"}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.enrollmentCount} enrolled
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fallbackCourses.map((course) => (
              <Card key={course.slug} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  {course.image && course.image.startsWith("http") ? (
                    <img
                      src={course.image}
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
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Badge variant="outline" className="text-xs">{course.category}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {course.lessons} lessons
                    </div>
                  </div>
                </CardContent>
              </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Browse by Category</h2>
            <p className="text-muted-foreground">Explore courses by training type and certification</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {displayCategories.length > 0 ? (
              displayCategories.map((category) => {
                const IconComponent = CATEGORY_ICONS[category.slug] || Target;
                const colorClass = CATEGORY_COLORS[category.slug] || "bg-amber-500";
                return (
                  <Link
                    key={category.id}
                    href={`/academy/courses?category=${category.slug}`}
                    className="group"
                  >
                    <Card className="text-center p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                      <div className={`w-14 h-14 rounded-full ${colorClass} flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="font-semibold mb-1 group-hover:text-amber-600 transition-colors">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.courseCount} courses</p>
                    </Card>
                  </Link>
                );
              })
            ) : (
              fallbackCategories.map((category) => (
                <Link
                  key={category.name}
                  href={`/academy/courses?category=${category.name.toLowerCase().replace(/ & /g, '-')}`}
                  className="group"
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className={`w-14 h-14 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1 group-hover:text-amber-600 transition-colors">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.courseCount} courses</p>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Upcoming Workshops</h2>
              <p className="text-muted-foreground">Live, interactive training sessions with TDA Enterprise instructors</p>
            </div>
            <Button variant="ghost" className="text-amber-600" asChild>
              <Link href="/academy/workshops">
                View All Workshops
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {workshops.length > 0 ? (
              workshops.map((workshop) => (
                <Card key={workshop.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-amber-600 border-amber-500/50">
                        <Calendar className="h-3 w-3 mr-1" />
                        {workshop.workshopType === "live" ? "Live Workshop" : "Recorded"}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{workshop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {workshop.scheduledStart?.toDate().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {workshop.scheduledStart?.toDate().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short" })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {workshop.maxParticipants ? `${workshop.maxParticipants - workshop.registrationCount} spots remaining` : "Open registration"}
                      </div>
                    </div>
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : useFallback ? (
              fallbackWorkshops.map((workshop) => (
                <Card key={workshop.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-amber-600 border-amber-500/50">
                        <Calendar className="h-3 w-3 mr-1" />
                        {workshop.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{workshop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {workshop.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {workshop.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {workshop.spots} spots remaining
                      </div>
                    </div>
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : null}
          </div>
        </div>
      </section>

      {/* Assessments Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-500/20 text-amber-400 border-amber-500/30">
              Pre & Post Assessments
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Measure Your Knowledge</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Take pre and post-course assessments to track your progress, 
              identify knowledge gaps, and demonstrate compliance for OSHA recordkeeping.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="font-semibold mb-2">Diagnostic Assessments</h3>
                <p className="text-sm text-gray-400">Identify your starting point and key areas for development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="font-semibold mb-2">Progress Tracking</h3>
                <p className="text-sm text-gray-400">Monitor skill development throughout your learning journey</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="font-semibold mb-2">Certification</h3>
                <p className="text-sm text-gray-400">Earn certificates upon successful course completion</p>
              </div>
            </div>

            <Button size="lg" className="mt-10 bg-amber-500 hover:bg-amber-600 text-slate-900" asChild>
              <Link href="/business/free-assessment">
                Request Free Safety Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Choose Your Training Plan</h2>
            <p className="text-muted-foreground">Flexible plans designed for individuals and teams at every stage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {subscriptionTiers.map((tier) => (
              <Card 
                key={tier.name} 
                className={`relative ${tier.popular ? 'border-amber-500 shadow-lg scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-amber-500 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="my-6">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-muted-foreground">/{tier.period}</span>
                  </div>
                  <ul className="space-y-3 text-left mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-amber-500 hover:bg-amber-600 text-slate-900' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans include a 14-day free trial. Cancel anytime. Annual billing saves 20%.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Certified?</h2>
            <p className="text-muted-foreground mb-8">
              Join hundreds of professionals who are advancing their careers through 
              the TDA Enterprise Academy. Start your training today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900" asChild>
                <Link href="/academy/courses">
                  Browse All Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/business/contact">
                  Talk to an Instructor
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

