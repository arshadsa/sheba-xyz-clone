import React from "react";

const CounterSectionComponent = ({sectionTitle, sectionNumber}) => {
  return (
      <div class="col-4 column-border">
            <div class="counter-section">
                <h2 class="h1-title counter-section__number">{sectionNumber}</h2> 
                <p class="large-paragraph counter-section__title">{sectionTitle}</p>
              </div>
            </div>
  );
};

export default CounterSectionComponent;
