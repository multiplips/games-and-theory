# Demostrates logging feature.

import logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
logging.debug('Start of program')

def factorial(n):
    logging.debug('Start of factorial(%s)' % (n))
    total = 1
    for i in range(1, n + 1):
        total *= i
        logging.debug(f'is is {str(i)}, total is {str(total)}')

    logging.debug(f'End of factorial({n})')

print(factorial(5))
logging.debug('End of program')
