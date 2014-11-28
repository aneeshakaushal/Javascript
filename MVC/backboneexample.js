/*var Song = Backbone.Model.extend({
        defaults: {
            name: "Not specified",
            artist: "Not specified"
        },
        initialize: function(){
            console.log("Music is the answer "+ this.name);
        }
    });

    var Album = Backbone.Collection.extend({
        model: Song
    });

    var song1 = new Song({ name: "How Bizarre", artist: "OMC" });
    var song2 = new Song({ name: "Sexual Healing", artist: "Marvin Gaye" });
    var song3 = new Song({ name: "Talk It Over In Bed", artist: "OMC" });

    var myAlbum = new Album([ song1, song2, song3]);
    console.log( myAlbum.models[0].name);*/

var Photo = Backbone.Model.extend({
    // Default attributes for the photo
    defaults: 
    {
      src: "placeholder.jpg",
      caption: "A default image",
      viewed: false
    },
    
    // Ensure that each photo created has an `src`.
    initialize: function() {
       this.set({"src": this.defaults.src});
    }
});

var PhotoGallery = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: Photo,
    // Filter down the list of all photos
    // that have been viewed
    viewed: function() {
        return this.filter(function(photo){
           return photo.get('viewed');
        });
    },
    // Filter down the list to only photos that
    // have not yet been viewed
    unviewed: function() {
      return this.without.apply(this, this.viewed());
    }
});

var buildPhotoView = function( photoModel, photoController ){
    var base        = document.createElement('div'),
        photoEl     = document.createElement('div');
     base.appendChild(photoEl);
     var render= function(){
        // We use a templating library such as Underscore
        // templating which generates the HTML for our
        // photo entry
        photoEl.innerHTML = _.template('photoTemplate', {src: photoModel.getSrc()});
     }

     photoModel.addSubscriber( render );
     photoEl.addEventListener('click', function(){ photoController.handleEvent('click', photoModel ); });
     var show = function(){
        photoEl.style.display  = '';
     }
     var hide = function(){
        photoEl.style.display  = 'none';
     }
     return{
        showView: show,
        hideView: hide
     }
}