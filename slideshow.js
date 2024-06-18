const photoSlideShow = {
    photoList: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'], 
    currentPhotoIndex: 0, 
  
    nextPhoto: function() {
      if (this.currentPhotoIndex < this.photoList.length - 1) {
        this.currentPhotoIndex++;
        console.log(`Next photo: ${this.photoList[this.currentPhotoIndex]}`);
      } else {
        console.log("End of slideshow");
      }
    },
  
    prevPhoto: function() {
      if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--;
        console.log(`Previous photo: ${this.photoList[this.currentPhotoIndex]}`);
      } else {
        console.log("Beginning of slideshow");
      }
    },
  
    getCurrentPhoto: function() {
      return this.photoList[this.currentPhotoIndex];
    }
  };
  
  photoSlideShow.nextPhoto(); 
  photoSlideShow.nextPhoto(); 
  photoSlideShow.prevPhoto(); 
  console.log(photoSlideShow.getCurrentPhoto()); 
  photoSlideShow.prevPhoto(); 
  photoSlideShow.nextPhoto(); 
  photoSlideShow.nextPhoto(); 
  photoSlideShow.nextPhoto(); 
  photoSlideShow.nextPhoto(); 
  