import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

const AddMovieForm = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 5
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 5
    });
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Ajouter un nouveau film</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Titre"
            value={newMovie.title}
            onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
            required
          />
          <Input
            type="text"
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) => setNewMovie({...newMovie, description: e.target.value})}
            required
          />
          <Input
            type="url"
            placeholder="URL de l'affiche"
            value={newMovie.posterURL}
            onChange={(e) => setNewMovie({...newMovie, posterURL: e.target.value})}
          />
          <div className="flex items-center gap-2">
            <span>Note:</span>
            <Input
              type="number"
              min="1"
              max="5"
              value={newMovie.rating}
              onChange={(e) => setNewMovie({...newMovie, rating: Number(e.target.value)})}
              className="w-20"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Ajouter le film
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddMovieForm;