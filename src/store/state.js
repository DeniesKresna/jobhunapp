export const state = {
  data: [],
  isLoading: false,
  isSideBar: false,
  menus: [
  	{'text':'Beranda', 'path':'/'},
  	{'text':'Tentang', 'path':'/tentang'},
  	{'text':'Kelas', 'child':[
  		{'text': 'Daftar Kelas', 'path':'Kelas'},
  		{'text': 'Testimoni', 'path':'#'}
  	]}
  ]
};