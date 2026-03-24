import 'package:flutter/material.dart';   // ← This line was missing!

// TODO: Replace this with your real ApiService later
class ApiService {
  static Future<String> registerUser(String name, String email, String password) async {
    // Fake response for now
    await Future.delayed(const Duration(seconds: 1));
    return 'User registered successfully!';
  }
}

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('SentinelX Login'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            const TextField(
              decoration: InputDecoration(labelText: 'Email'),
            ),
            const TextField(
              decoration: InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () async {
                var res = await ApiService.registerUser(
                  "Test User",
                  "test@email.com",
                  "123456",
                );
                print(res);
              },
              child: const Text('Register'),
            ),
          ],
        ),
      ),
    );
  }
}

void main() {
  runApp(const MaterialApp(
    home: LoginScreen(),
    debugShowCheckedModeBanner: false,
  ));
}