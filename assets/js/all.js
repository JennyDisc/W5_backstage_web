"use strict";

// $(function() {
//   console.log('Hello Bootstrap5');
// });
// 引入CKEditor 5文字編輯器
ClassicEditor.create(document.querySelector('#editor'), {
  toolbar: ['heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'imageUpload', 'link', 'blockQuote', 'Code'],
  placeholder: 'Reply an answer…'
}).then(function (editor) {
  console.log(editor);
});
//# sourceMappingURL=all.js.map
