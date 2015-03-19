var number;
function LMYC() {
var lbmc;
    for (i=1;i<=number;i++) {
        lbmc = eval('LM' + i);
        lbmc.style.display = 'none';
    }
}
 
function ShowFLT(i) {
    lbmc = eval('LM' + i);
    if (lbmc.style.display == 'none') {
		//$("#LM"+i).show();
        LMYC();
		$("#LM"+i).slideDown(200);
    }
    else {
        //lbmc.style.display = 'none';
		$("#LM"+i).slideUp(200);
    }
}
function ChangeDisplay(num)
{
	for(var i=1; i<=5; i++)
	{
		var ul = document.getElementById("tab"+i);
		var a = document.getElementById("aTab"+i);
		if (i==num)
		{
			ul.style.display='';
			a.className = 'hovertag';
		}
		else
		{
			ul.style.display='none';
			a.className = '';
		}
	}
}

function ChangeSubDisplay(num)
{
	for(var i=1; i<=2; i++)
	{
		var ul = document.getElementById("tabs"+i);
		var a = document.getElementById("aTabs"+i);
		if (i==num)
		{
			ul.style.display='';
			a.className = 'hovertag1';
		}
		else
		{
			ul.style.display='none';
			a.className = '';
		}
	}
}

function ChangeSubDisplay(num)
{
	for(var i=1; i<=40; i++)
	{
		var ul = document.getElementById("tabx"+i);
		var a = document.getElementById("aTabx"+i);
		if (i==num)
		{
			ul.style.display='';
			a.className = 'unit_hovertag';
		}
		else
		{
			ul.style.display='none';
			a.className = '';
		}
	}
}