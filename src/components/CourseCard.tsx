import { Clock, Users, Star, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  image: string;
  category: string;
  progress?: number;
  isEnrolled?: boolean;
}

const CourseCard = ({ 
  id, 
  title, 
  instructor, 
  description, 
  duration, 
  students, 
  rating, 
  price, 
  image, 
  category,
  progress,
  isEnrolled = false
}: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
            {category}
          </Badge>
          <div className="absolute bottom-3 right-3">
            <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full bg-background/80 hover:bg-background">
              <Play className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-muted-foreground">({students.toLocaleString()})</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{students.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <Link to={`/courses/${id}`}>
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
            {title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        
        <p className="text-sm text-muted-foreground mb-4">
          by <span className="text-foreground font-medium">{instructor}</span>
        </p>

        {isEnrolled && progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-primary font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="text-2xl font-bold text-primary">
            ${price}
          </div>
          <Button 
            variant="gradient"
            disabled={isEnrolled}
          >
            {isEnrolled ? "Enrolled" : "Enroll Now"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;