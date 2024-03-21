import './ImageCard.css'

const ImageCard = ({ title, imageUrl, price }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={title} />
      <div className="image-details">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ImageCard;
