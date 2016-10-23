var memo = {
	time:0
}

function BrainAction()
{
	if(memo.time < 100)
	{
		moveDown();
	} else {
		moveUp();
	}
	if (memo.time > 200) {
		memo.time = 0;
	}
	memo.time++;
}