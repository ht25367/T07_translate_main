from googletrans import Translator
import eel



def trans_py(source,source_l,trans_l):
	# source = ""input("翻訳したい日本語を入力して下さい:")
	
	try:
		trn = Translator()
		rst = trn.translate(source, src=source_l, dest=trans_l)
		eel.write_trans_text_js(rst.text)
	except TypeError:
		return
