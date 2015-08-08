export default function() {
  this.transition(
    this.fromRoute('feed.index'),
    this.toRoute((routeName) => routeName.split('.')[0] === 'feed'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
