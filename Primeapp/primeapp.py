import flask
import math
from prometheus_flask_exporter import PrometheusMetrics
app = flask.Flask(__name__)
metrics = PrometheusMetrics(app)
def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

def prime_sum(limit):
    total = 0
    for num in range(2, limit + 1):
        if is_prime(num):
            total += num
    return total

@app.route('/compute-prime-sum/<int:limit>', methods=['GET'])
def compute_prime_sum(limit):
    prime_sum_result = prime_sum(limit)
    return {'prime_sum': prime_sum_result}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
