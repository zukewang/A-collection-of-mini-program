// pages/demo2-5/textarea.ts
//textarea.js
Page({
  data: {
    height: 20,
    focus: false
  },
  bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function(e: { detail: { value: any } }) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function(e: { detail: { value: { textarea: any } } }) {
    console.log(e.detail.value.textarea)
  }
})