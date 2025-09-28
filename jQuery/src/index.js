$(() => {
  $('#button').dxButton({
    text: 'Click me!',
    type: 'success',
    stylingMode: 'outlined',
    icon: 'comment',
    onClick(e) {
      DevExpress.ui.notify(`The button ${e.component.option('text')} was clicked`);
    },
  });
});
