function kabartmaOvr(src)
{ 
if (!src.contains(event.fromElement))
	{
	if (src.className == "kabartmaActive")
		{
		src.className = "kabartmaActiveOver";
		}
	else
		{
		src.className="kabartmaOver";
		}
	} 
}

function kabartmaOut(src)
{ 
if (!src.contains(event.toElement))
	{
	if (src.className == "kabartmaActiveOver")
		{
		src.className = "kabartmaActive";
		}
	else
		{
		src.className="kabartma";
		}
	} 
}

function kabartma2Ovr(src)
{ 
if (!src.contains(event.fromElement))
	{
		src.className="kabartma2Over";
	} 
}

function kabartma2Out(src)
{ 
if (!src.contains(event.toElement))
	{ 
		src.className="kabartma2";
	}
}

function buttonBarOvr(src)
{ 
if (!src.contains(event.fromElement))
	{
		src.className="frmButtonBarOver";
	} 
}

function buttonBarOut(src)
{ 
if (!src.contains(event.toElement))
	{ 
		src.className="frmButtonBar";
	}
}
