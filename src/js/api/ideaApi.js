const noInitialIdeas = 9;
let lastUsedId = 0;

const IdeaAPI = {
  ideaItems: [],
  increasePoints( item ) { item.points++; },
  decreasePoints( item ) { item.points--; },
  findIdeaItem( item ) {
    return this.ideaItems.find( ideaItem => ideaItem.id === item.id );
  },
  addIdeaItem( item ) {
    const ideaItem = this.findIdeaItem( item );
    if ( !ideaItem ) {
      this.ideaItems.push( Object.assign( {
        qty: 1,
        id: 'ID' + (lastUsedId + 1),
        points: 0,
        added: '2016-01-12'
      }, item ) );
      lastUsedId++;
    }
  },
  init() {
    for ( let i = 1; i < noInitialIdeas; i++ ) {
      this.ideaItems.push({
        'id': 'ID' + i,
        'heading': 'Idea #' + i,
        'description': 'Lorem ipsum dolor sit amet.',
        'added': '2015-01-05',
        'points': 0
      });
      lastUsedId = i;
    }
  }
};

IdeaAPI.init();
export default IdeaAPI;
