  <script>
    function gen() {
      const size = parseInt(document.getElementById("size").value);
      const fib = [0n, 1n];
      let res = "";
      for (let i = 0; i < size; i++) {
        if (i > 1) fib.push(fib[i-1] + fib[i-2]);
        res += fib[i] + " ";
      }
      document.getElementById("out").textContent = res.trim();
    }
  </script>
