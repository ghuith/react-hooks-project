import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from 'lucide-react';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;
  
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-[2/3] relative mb-4">
          <img
            src={posterURL || "/api/placeholder/200/300"}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default MovieCard;