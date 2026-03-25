import 'package:flutter/material.dart';
import 'screens/login_screen.dart';

void main() {
  runApp(const SentinelXApp());
}

class SentinelXApp extends StatelessWidget {
  const SentinelXApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'SentinelX',
      debugShowCheckedModeBanner: false,
      home: LoginScreen(),
    );
  }
}
