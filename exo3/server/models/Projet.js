var Projet = new Schema({
  titre: {
    type: String
  },
  description: {
      type: String
  },
  createur: {
      type: String
}
},{
    collection: 'Projets'

});

module.exports = mongoose.model('Projet', Projet);
