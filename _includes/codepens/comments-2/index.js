tinymce.init({
  selector: '#tiny-ui .editor',
  toolbar: 'bold italic underline | addcomment',
  menubar: 'file edit view insert format tools tc',
  menu: {
    tc: {
      title: 'TinyComments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  plugins: 'paste tinycomments',
  tinycomments_mode: 'embedded',
  tinycomments_author: 'Author'
});