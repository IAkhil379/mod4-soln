var names=new Array();
names[0]="Akhil";
names[1]="Kishore";
names[2]="Manikanta";
names[3]="Bipin";
names[4]="Srujan";
names[5]="James Bond";
names[6]="Jack";
names[7]="Varun";
names[8]="Priya";
names[9]="Hamshika";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}