export default function(){
  const duration = 500;

  this.transition(
    this.fromRoute('movies.index'),
    this.toRoute('movies.show'),
    this.useAndReverse('explode', {
      matchBy: 'data-poster-image',
      use: ['fly-to', { duration }]
    })
  );
};