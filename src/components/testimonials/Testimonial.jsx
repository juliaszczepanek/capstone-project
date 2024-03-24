// import React from 'react';
// import './testimonial.css';


// const Testimonial = () => {
//   return (
//     <div className="testimonials__content">
//       <div className="testimonials__content-title"><h1>Testimonials</h1>
//       </div>
//       <div className="testimonials___content-opinions">
//         <div className="testimonials__container">
//           <div className='rating'>* * * * *</div>
//           <div className='img_testimonial'><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={60} height={60} /> <p>Mary</p></div>
//           <div><p>Little Lemon's Bruschetta is a symphony of flavors; perfectly crispy bread coupled with the freshest tomatoes.</p></div>
//         </div>
//         <div className="testimonials__container">
//           <div className='rating'> * * * * </div>
//           <div><img width={60} src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" height={60} /> <p>John</p></div>
//           <div><p>The burger at Little Lemon was a taste revelation with its juicy, perfectly cooked meat and harmonious ingredient pairing.</p></div>
//         </div>
//         <div className="testimonials__container">
//           <div className='rating'>* * * *</div>
//           <div><img alt="avatar" width={60} height={60} src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" /> <p>Thomas</p></div>
//           <div><p>The Greek Salad at Little Lemon was delightfully fresh and flavorful, with a high-quality dressing.</p></div>
//         </div>

//         <div className="testimonials__container">
//           <div className='rating'> * * * * *</div>
//           <div><img alt="avatar" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" width={60} height={60} />
//             <p>Kate</p></div>
//           <div><p>The Greek Salad at Little Lemon was delightfully fresh and flavorful, with a high-quality dressing.</p></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Testimonial;

import React from 'react';
import './testimonial.css';

const Testimonial = () => {
  // Function to generate star rating based on the provided rating value
  const generateRating = (rating) => {
    const filledStars = '★'.repeat(rating); // ★ represents a filled star
    const emptyStars = '☆'.repeat(5 - rating); // ☆ represents an empty star
    return filledStars + emptyStars;
  };

  // Testimonials data containing name, rating, and content
  const testimonials = [
    { name: 'Mary', rating: 5, content: "Little Lemon's Bruschetta is a symphony of flavors; perfectly crispy bread coupled with the freshest tomatoes." },
    { name: 'Amy', rating: 4, content: "The burger at Little Lemon was a taste revelation with its juicy, perfect meat and harmonious ingredient pairing." },
    { name: 'Anna', rating: 4, content: "The Greek Salad at Little Lemon was delightfully fresh and flavorful, with a high-quality dressing." },
    { name: 'Johnny', rating: 5, content: "The Greek Salad at Little Lemon was delightfully fresh and flavorful, with a high-quality dressing." }
  ];

  return (
    <div className="testimonials__content">
      <div className="testimonials__content-title">
        <h1>Testimonials</h1>
      </div>
      <div className="testimonials___content-opinions">
        {/* Mapping through testimonials array and rendering each testimonial */}
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonials__card">
            <div className='rating'>{generateRating(testimonial.rating)}</div>
            <div className='img_testimonial'>
              <img src={`https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(${index + 10}).webp`} alt="avatar" width={60} height={60} />
              <p>{testimonial.name}</p>
            </div>
            <div clasName="testimonial__content-paragraph">
              <p>{testimonial.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial;
