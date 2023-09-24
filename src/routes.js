/* eslint-disable max-len */
// Memuat kode konfigurasi routing server, seperti menentukan path, method, dan handler yang digunakan
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');
const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
      },
      {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: () => {},
      },
      {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
     },
  ];
   
  const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
  } = require('./handler');