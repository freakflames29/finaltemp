
function gen_tempsys()
{
	const tnum=document.getElementById('tempsys_tick_number').value;
	const tuser=document.getElementById('tempsys_tc_uname').value;
	const eid=document.getElementById('tempsys_tc_empid').value;
	const odc=document.getElementById('tempsys_tc_ODC').value;
	const project=document.getElementById('tempsys_tc_Project').value;
	const seatno=document.getElementById('tempsys_tc_Seatno').value;
	const building=document.getElementById('tempsys_tc_Building').value;

	const email_sub=document.getElementById('tempsys_tc_email_sub');
	const email_body=document.getElementById('tempsys_tc_msg_field');

	email_sub.value=`Temporary System requirement | Ticket Number: ${tnum}`;

	email_body.innerHTML=`Dear Team,
Kindly arrange a temporary system for the below mentioned user as the user is unable to work on the system call log has been done.

User name: ${tuser}
EMP Id: ${eid}
ODC: ${odc}
Project: ${project}
Seat no: ${seatno}
Building: ${building}

	`;
}
function tempsys_sub_copy()
{
	fuckitcopyit('tempsys_tc_email_sub');
}

function tempsys_body_copy()
{
	fuckitcopyit('tempsys_tc_msg_field');
}