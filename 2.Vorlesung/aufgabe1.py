import numpy as np

def getTemp1(value=19.3):
    return value

def getTemp2(value=19.3):
    return float(value + np.random.randn(1))

def getTemp3(value=20.1):
    r = np.random.rand()
    if r > 0.7:
        return value*r * 1.5 if r>0.85 else value*r * -1.5
    else:
        return float(value + np.random.randn(1)/10)
	