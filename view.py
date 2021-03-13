import eel
import desktop
import google_trans

app_name="html"
end_point="index.html"
size=(1250,600)

@ eel.expose
def trans_py(source,source_l,trans_l):
	google_trans.trans_py(source,source_l,trans_l)

desktop.start(app_name,end_point,size)
