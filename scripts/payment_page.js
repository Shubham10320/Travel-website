
//   // Open Razorpay checkout form
//   var rzp = new Razorpay(options);
//   rzp.open();
// });

// var buyNowButton = document.getElementById('buy-now-button');
//     var loadingScreen = document.getElementById('loading-screen');

   
//     buyNowButton.addEventListener('click', function(e) {
//       e.preventDefault();

     
//       loadingScreen.style.display = 'block';

      
//       setTimeout(function() {
      
//         var options = {
//           key: 'rzp_test_PuIvwrP2D7FLip',
//           amount: 10000, // Amount in paisa (e.g., 10000 = ₹100)
//           currency: 'INR',
//           name: 'Your Company',
//           description: 'Product Description',
//           image: 'data:image/png;base64,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', // URL of your company logo
//           handler: function(response) {
         
//             window.location.href = '../html/index.html';
//           },
//           prefill: {
//             name: 'John Doe',
//             email: 'john@example.com',
//             contact: '9876543210'
//           },
//           notes: {
//             address: '1234, Test Address'
//           },
//           theme: {
//             color: 'blue'
//           }
//         };

//         // Open Razorpay checkout form
//         var rzp = new Razorpay(options);
//         rzp.open();
//       }, 3000); // (3 seconds)
//     });