const navlinkS= document.querySelector('.nav-link');
const windowpathname= window.location.pathname;

navlinkS.array.forEach(navlinkS=> {
	if(navlinkS.href.includes(windowpathname)){
		navlinkS.classlist.add('active');
	}
});