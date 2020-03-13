export const state = {
  data: [],
  isLoading: false,
  isSideBar: false,
  menus: [
  	{'text':'Beranda', 'path':'/'},
  	{'text':'Tentang', 'path':'/tentang'},
  	{'text':'Kelas', 'child':[
  		{'text': 'Harga', 'path':'#'},
  		{'text': 'Testimoni', 'path':'#'}
  	]}
  ]
};