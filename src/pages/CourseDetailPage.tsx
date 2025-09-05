import { useState } from "react";
import { useParams } from "react-router-dom";
import { Play, Clock, Users, Star, CheckCircle, Lock, Download, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/data/courses";

const CourseDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedLesson, setSelectedLesson] = useState(0);
  
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Course not found</h1>
          <p className="text-muted-foreground">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const currentLesson = course.lessons?.[selectedLesson];
  const completedLessons = course.lessons?.filter(lesson => lesson.completed).length || 0;
  const totalLessons = course.lessons?.length || 0;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <Card className="overflow-hidden bg-gradient-card border-border/50">
              <div className="aspect-video bg-black relative">
                {course.videoUrl ? (
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster={course.image}
                  >
                    <source src={course.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="flex items-center justify-center h-full text-white">
                    <div className="text-center">
                      <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Video preview not available</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Course Info Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-warning text-warning" />
                            <span>{course.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{course.students.toLocaleString()} students</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </div>
                        </div>
                        <Badge className="mb-4">{course.category}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Share className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">About this course</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {course.description}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Instructor</h3>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <span className="text-primary font-semibold">
                              {course.instructor.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium">{course.instructor}</p>
                            <p className="text-sm text-muted-foreground">Industry Expert</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="lessons" className="space-y-4">
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{totalLessons} lessons</span>
                      <span>•</span>
                      <span>{completedLessons} completed</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {course.lessons?.map((lesson, index) => (
                        <div
                          key={lesson.id}
                          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedLesson === index 
                              ? 'bg-primary/10 border border-primary/20' 
                              : 'hover:bg-muted/50'
                          }`}
                          onClick={() => setSelectedLesson(index)}
                        >
                          <div className="flex-shrink-0">
                            {lesson.completed ? (
                              <CheckCircle className="h-5 w-5 text-success" />
                            ) : course.isEnrolled ? (
                              <Play className="h-5 w-5 text-primary" />
                            ) : (
                              <Lock className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{lesson.title}</p>
                            <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {index + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources">
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>Course Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                        <div>
                          <p className="font-medium">Course Slides</p>
                          <p className="text-sm text-muted-foreground">PDF • 2.3 MB</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                        <div>
                          <p className="font-medium">Source Code</p>
                          <p className="text-sm text-muted-foreground">ZIP • 1.8 MB</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                        <div>
                          <p className="font-medium">Exercise Files</p>
                          <p className="text-sm text-muted-foreground">ZIP • 945 KB</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {course.isEnrolled ? (
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {course.progress}%
                    </div>
                    <p className="text-sm text-muted-foreground">Complete</p>
                  </div>
                  <Progress value={course.progress} className="h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{completedLessons} of {totalLessons} lessons</span>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="gradient"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Enroll Now</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-1">
                      ${course.price}
                    </div>
                    <p className="text-sm text-muted-foreground">One-time payment</p>
                  </div>
                  <Button 
                    className="w-full text-lg py-6" 
                    variant="gradient"
                  >
                    Enroll Now
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">30-day money-back guarantee</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Course Stats */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Course Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lessons</span>
                  <span className="font-medium">{totalLessons}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Students</span>
                  <span className="font-medium">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language</span>
                  <span className="font-medium">English</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Certificate</span>
                  <span className="font-medium">Yes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;