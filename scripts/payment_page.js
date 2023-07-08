
//   // Open Razorpay checkout form
//   var rzp = new Razorpay(options);
//   rzp.open();
// });

// var buyNowButton = document.getElementById('buy-now-button');
    // var loadingScreen = document.getElementById('loading-screen');
     
    //   loadingScreen.style.display = 'block';
        // document.querySelector("body").style.opacity = "0.1"
        // document.querySelector("body").children.style.opacity = "0.5"
      let amount = localStorage.getItem("payable")*100
        var options = {
          key: 'rzp_test_PuIvwrP2D7FLip',
          amount: amount, // Amount in paisa (e.g., 10000 = ₹100)
          currency: 'INR',
          name: 'Alcazar-Travels',
          description: 'Product Description',
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEULRHH///8APWx7kKYmU3sAQW8AOGkAMGUANmgAM2YAO2sAQW5thZ4AOWkAL2QAMmWlssGuu8jI0ds7X4MALGIAKWHq7vEZSnSPoLN1i6OHmq7z9vjQ2OBVcpBKaoq4w8+Zqbre5epfeZfL1N1ngJo+YYQyWX7k6e62wc2SprhPbo6/ytQAIV2brsCElqssVXwAGFgAFlgAAE9/4g0kAAANgElEQVR4nO2dDXuqOhKAIRo+Cyh+i1WpVq107dn9/z9uZyZA+ZD23q7h3JzNPM+xLRDIayYzk0zCMW6L4Z8txoAZf7hoQvVFE6ovmlB90YTqiyZUXzSh+qIJ1RdNqL5oQvVFE6ovmlB90YTqiyZUXzSh+qIJ1RdNqL5oQvVFE6ovmlB90YTqiyZUX3ohZC7HH45Hn1YPT6xIH4TsZTP0DSPIbvAwdzRy5D+yIn0QunEC7cafzSsz/IW59uQ/siJ9EDomNpu7m0fQkGuz3ybsg5AdzQn0Q2aOgW2axrb0J9akB8IoPk9JSbfc4Cdz1a+S9kHomEuvUFJrb/pc+hNrIp+Q3cwTQFnmHpTUTg+R7Ac2RD5huEElhc4InP7JfOo7xOihDc1lgJ1xDpzB3uw9hpJO6A1MDu4+JCWN5jtX8vNaIp0w3GzCQkn5tn8llU7IP8wBWFL7kIKSWiMTXQW2aX8im9BbmguwpJw8xixBJeXHU58OQzahvdlADOPdTOYb/tZ8xth702tkKpmQD0lJhcdwxgl8GlG66TNwk0wYvJmgkfmAwqbI1PDW5qLHniiZ0D5nEXkM6IzshZQUeQc9qqlcQv5qrhjGahvgdMfJjI6Gm7RHNZVLCIG2ARZmSJxOko/u2Yrsa08il3A2RyWFzgicoKS5l/C5+RbIfGxNpBJCoP0C9w9JSaPsDMGNgZDhBoPUnkQqIcQw0OH4gka9vjnC2ZormFFv1aM1lUoYUgwjPAYo6StHZzhBRHPfm5rKJGRXUlLRGd1sjgY0H0tl85m859ZFJqEzMoGDT8wjK9CM6HDGY6JBexGZhFGCMYwYUICHGCITDKPw59TsbV5YIqGYXTOmpKTg5YX5dMnguFkSSntwXSQSitk1CGuwM7rmm8hXRBmG36w/NZVHyMUUsOiM4B+Gwj+AmmLLuklfaiqP0BdKKjpjqaTYBfcWjaR6mrGRRwhKahv5gAKHE/gg9PPOJcEwAEbD/aipPEKLvDq0lUNzGdgLI7Q5jHJQhpXs+lFTaYTsyTxhiwklTTegpDDGQPNiJxe3RzWVRiimgIXHKMa8IXlBZ5eggxSTNvJFGqGYAhYeA5SUDCm0m01qiiYo7Gl2WBahdyQltci/R2lM+RgwO+Qbk4tDo+NenL4swjBG9wCdcevjMPEoHuMWcZxj9DYBLk1LzXVQeAwgMoS7F5Y1D3NEOCddJBF6N5PzwruHZ1JSnFYU5iVMMpEt7cNfSCIM01xJPzimLmj4hB8i+WRRJAfOow81lUPIxRRweEhnxIPuniecotSgVNNZeujB1sjqh6ZBbhDDmhl5eH+CLQbmBZtySnqLWRv50zWSCC2cLvRo1AuuHRvMcOdIJbxgsMRRsf/Rx+S3rDbE24qkoTM2ybODYbEKL+gbFInb6UH+5LfMMb5BnXGWxy6cVimITziImeFgbUp7eikSCb01egx2NbfiGdMUqWb0CWrq834WuUkkFHnCMh+DxB4tx4DWxVliVNNNKt3pSxzjD6mBRGSKAn4RDvgFGzYlQA9lW1N5hBDWYNLwSONdEqGmU/KCbICeAnCXstVUHmGupJek1ENoMbCimAKmLri0aP5G9uS3zFkMzMd4pZKC3jIMx7kIym1KkzL5ORp5hMFoUa4tzSUkB2mnaZn5NhzpOZoHEeJAwmdMeHomuhYCuNm5Yiyh8504ekEIdaAp8xxNmUpkzId/cApD14dxP4bQ3x6u7HRYBx/pk/ex+bQejIZPhSAVWdMbrsyIMUcDalo0MlulJ3ZMX9lrGvLT5lFL+h9EeM2GfBKfuDVy/cmtnCeEyLQ2eR8d0rDsgjC08nEJyud3MHoNlm8v3Bm7hvWvR3WfBxE+vzF/uB1b1tjjp0/CKDvX0tmCynsiNeXUBd1sng+h+MfY9pb7I3d3/0DC1+zKPrIj95ZAmpUDW4dcQkWE1opPsf47n3nDc6vdiW2zD996s8Cb/rMIDd9lhu/AvaCDcbe4Z9sXRJQJtjeYAmZiOs5Nxvm3gFtrOG6vwW78sEBAah7fpqnuqoCaQsfMyacilbhLpO4TkrxS4a3RFD4pKA9oQY1zwTSp7FSi5NUmrYAl2uFQI9rlavrMi0lUaSJ55V4rIoMWA/8H5uWVdihQHkNujqb3/YdTarGpyA9fkI3nEzmSpHdCMCx2sVKBX80rpdtk5mh6JxQJUlakwC+kpqbEIVT/u2RnpKDCvACbyGNIzHj3T2iNErfM0TzTBPFsnslT0/4JxZR+Pk8s1DSgqVRJ8hv2cofUYmKlgiM/R/MbCK0xrsYUXtCf5Goqb4PCbyD0CzXFVOLsjLtmrT3uOJEjv+ONAxGpaa6se5wY52KtuxT5HYS4VbZIAed7LqN0I8ua/p63Rpw+P/nHwsBdJqc/SUuLgFx85jsUpM2a6jd/qC+aUH3RhOqLJlRfNKH6ognVF02ovmhC9eX/nNCxbfvOVC1zXbcr4+eFdohi2/fm6S3bju6UZHZFonZB9349vM9CXyQgvyJ0L4f4sG/dmh2z3W53/70P0WpTyHO7TsEb3HDcmnLiL4e4IotWPbI4PrTfwuANymKHUfeS+C8I/ZMJ0s5eWiM8fjczHQ3MT3lpIU7peCsv7K3NqjTfQOQP6XArPeVcKoV2ndmrLwitJZXdNq/oJmTHWlW3jUvYMx1uLQv+hrCoR/OBzrhaqjNT/gVhmFLR1n5dQTi5Q+iMalVdNhQrr1JzfcZ3hNO8Hk2VqBPOu/T0Ky3Nizbb/1vC+Xx+l3AqDptGo6i3SuYk4vSwftpfiMNp84sRhFAsoZ9diY9uwlLlhk2t6SQUZ16m7mx1h5C/5jdsZe2ZZVmO5QqUpiXyir7dtG2C0ACznvyM0N3ld26uifmO0PBzI3WrFyyVsaPLzGI623ybWxTnxZq7TwTh0DfC888IrSS/c9zQ8O8I0VZy9ImNGoWbosvcXZ+f26FB0ys4RT2am6RKwuhnhPyK5enujWf+FcJ7NzTKG7bM4idJa9m3AKdzd7V0YQXvPyMUVuOGH8f6NT8k9J5I5fGjHUXA8zp8k6jH+k49BOFyvR79zNKQr5g7WLix2uWHhFGGJy00mHe2keQWc9c6Qyp4tvBkw281vMXfJRQ6NX5HzqRe+GeEvoeatvk1vn9JSPxma5mYsFnjX1iPcx3/f/SHHunn1SXdqa92+SHhlnTKfcEfrYQvo15vrlvqG5BaP4t61HOMdcLOt012EQobPRM+rL5h4GeE1h7PfXAXf7SWz4j46dx2IxEa4CQS30B9wXGN8LVzxW0XoY3F4nfnF3aD+kKJv0ToMc+rXREhQ/pv5xeqY9Iwz4Fwldd2ZTw8fnl33lHH66/qE4RXUrb5exdgF2Ee0CSJcEa1ZvkrhIvBYHCrXsIXtRs2XhhBBs3M2i9xE/VIynpUH5p7ixmd6V7d2EFYG5mYZu0qwXGyPJL2GRZ4zgR/qQ7pGtF1Payxhb4xccsv6lHrv7nHj+hH1rkep4Nweq7dOa5aMcGxHJDcqg8VZ8a3240qVo1Ly4BGSC2czwPWeEU3HFT1ZZbUil2qX0xOyCZtNfuekJ/MulS/WKs+RuKdZ2qEjRtWKxR0jp74tl4qqX4xOSG36cu7F0V8QWiRjR48oYjxQqul7hLua2cqQ11OsdeebkhjhXW3BlcIRUAj6kE81XivIGQULM3/3giYBp2Jy0A8huWrw89uQm7MKyeqO5dEbbiHN6RhYnUY3E1I9ZjPsJhFalUNawrCfCDbtfbvLiH/wCJ5sCZoKxWyap62Fg/77LP/1hY52RVj71L4UjGL3rKDkA8rVBF+MdW3vAkrBITuuPW87wgNA9Uin/PiJ/i9qqV0oJRjrYdz76WQmnFjL09Pq0m+UGixgnKVYv6wdsNqjfBA9bGteojH42Vdy4y7/CHDjYB5BfCP6kkftaaUOyWrpSuH/eofdwu1blgt1q5HeeDOA78j/INEE6ovmlB90YTqiyZUXzSh+vJQwkjk4MVroWhw6LvFWzIMzPHjryyk8y79wXGExQIKL32RjXfCx+7UeyjhJsUtoQG+MpC/rBmG/9lsUKSgvMEcfuXHNIY/nCyFATLfjgLDPy6PUA1+PdNrI8fnx25GfCTh4jyJHZx1oTeUjwKaDTHSYn7BPb+nEXCORitmuOksdQz2fIBGXiWDvWe4h+sBhoaLdPjY1+8+tA3PT5kDI/YNDLdLwlFSEsYXGAl5g3F2RMIVDFnZc4yE5mjpGdHh+AxXeef9Y/cHPZDQN5IYGiGK38YWEuL/9TCJk3E5RzRdwygfWmyE/1lgmq68nHAwxpe6RPEgmXDov+PxQ7dbPlZL3/F1LOdLGiIhbtZ+PSwHxRxPcPj3GU4MRjhh5qbbuGjDwfq8RC19TeELGu6G2T9WSxcbUszDf1KwG8dkPuR8kr0/FVlya49NBej4t3NwN3DVM9Cw1Xq9xt8TRLOy5LG78x/aD2lqhkcGzh+z2RSz3dBE5byhNcXW9PKJJXEV/QdQnofXsKlwI9PHumjt8dUXTai+aEL1RROqL5pQfdGE6osmVF80ofqiCdUXTai+aEL1RROqL5pQfdGE6osmVF80ofqiCdUXTai+aEL1RROqL5pQfdGEyst/ATap1AxUxTX+AAAAAElFTkSuQmCC', // URL of your company logo
          handler: function(response) {
         
            window.location.href = '../html/thankyou.html';
          },
          prefill: {
            name: 'Masai School',
            email: 'm@example.com',
            contact: '9876543210'
          },
          notes: {
            address: '1234, Test Address'
          },
          theme: {
            color: 'blue'
          }
        };
        console.log(options)
        // Open Razorpay checkout form
        var rzp = new Razorpay(options);
        rzp.open();