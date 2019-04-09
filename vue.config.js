module.exports = {
  pages: {
    index: {
      entry: 'src/index/index.js',
      template: 'src/index/index.html',
      filename: 'index.html',
      title: 'Index'
    },
    admin: {
      entry: 'src/admin/admin.js',
      template: 'public/admin.html',
      filename: 'admin.html',
      title: 'Admin'
    }
  }
}
