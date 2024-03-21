import ImageCard from './ImageCard';
import './Gallery.css'

const Gallery = () => {
  const images = [
    { id: 1, title: 'Image 1', imageUrl: 'https://dummyjson.com/image/200x100', price: '$10' },
    { id: 2, title: 'Image 2', imageUrl: 'https://dummyjson.com/image/200x100', price: '$15' },
    { id: 3, title: 'Image 3', imageUrl: 'https://dummyjson.com/image/200x100', price: '$20' },
  ];

  return (
    <div className="gallery">
      {images.map(image => (
        <ImageCard key={image.id} title={image.title} imageUrl={image.imageUrl} price={image.price} />
      ))}
    </div>
  );
};

export default Gallery;
