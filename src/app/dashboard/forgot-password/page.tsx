'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { useToast } from '@/context/ToastContext';
import { Mail, Clock, Lock } from 'lucide-react';
import { getSupabaseServer } from '@/lib/supabase-server';



export default function ForgotPasswordPage() {
    const supabase = getSupabaseServer();
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState<'email' | 'otp' | 'password'>('email');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

    const router = useRouter();
    const { showToast } = useToast();

    const handleRequestOtp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            showToast('Please enter your email', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        setLoading(true);

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`,
            });

            if (error) {
                showToast(error.message || 'Failed to send OTP', 'error');
                return;
            }

            setOtpSent(true);
            setStep('otp');
            showToast('6-digit code sent to your email!', 'success');
        } catch (error) {
            console.error('Error requesting OTP:', error);
            showToast('An error occurred while sending OTP', 'error');
        } finally {
            setLoading(false);
        }
    };

    // Step 2: Verify OTP
    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!otp || otp.length !== 8) {
            showToast('Please enter a valid 8-digit code', 'error');
            return;
        }

        setLoading(true);

        try {
            const { data, error } = await supabase.auth.verifyOtp({ email, token: otp, type: 'email' })

            if (error) {
                showToast(error.message || 'Invalid OTP', 'error');
                return;
            }

            setStep('password');
            showToast('Code verified! Now set your new password.', 'success');
        } catch (error) {
            console.error('Error verifying OTP:', error);
            showToast('An error occurred while verifying OTP', 'error');
        } finally {
            setLoading(false);
        }
    };

    // Step 3: Reset Password
    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!newPassword || !confirmPassword) {
            showToast('Please fill in all fields', 'error');
            return;
        }

        if (newPassword.length < 8) {
            showToast('Password must be at least 8 characters long', 'error');
            return;
        }

        if (newPassword !== confirmPassword) {
            showToast('Passwords do not match', 'error');
            return;
        }

        setLoading(true);

        try {
            const { error } = await supabase.auth.updateUser({
                password: newPassword,
            });

            if (error) {
                showToast(error.message || 'Failed to reset password', 'error');
                return;
            }

            showToast('Password reset successfully! Redirecting to login...', 'success');

            // Sign out and redirect
            await supabase.auth.signOut();
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (error) {
            console.error('Error resetting password:', error);
            showToast('An error occurred while resetting password', 'error');
        } finally {
            setLoading(false);
        }
    };

    // ============ STEP 1: EMAIL INPUT ============
    if (step === 'email') {
        return (
            <div className="min-h-screen w-full bg-[#161614] flex items-center justify-center px-4 py-12">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password?</h1>
                    <p className="text-gray-600 mb-6">
                        Enter your email and we'll send you a 6-digit code to reset your password.
                    </p>

                    <form onSubmit={handleRequestOtp} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                disabled={loading}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading || !email}
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            {loading ? 'Sending Code...' : 'Send Code'}
                        </button>
                    </form>

                    <p className="text-center text-gray-600 text-sm mt-6">
                        Remember your password?{' '}
                        <button
                            onClick={() => router.push('/login')}
                            className="text-indigo-600 hover:text-indigo-700 font-semibold"
                        >
                            Back to Login
                        </button>
                    </p>
                </div>
            </div>
        );
    }

    // ============ STEP 2: OTP VERIFICATION ============
    if (step === 'otp') {
        return (
            <div className="min-h-screen w-full bg-[#161614] flex items-center justify-center px-4 py-12">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                    <div className="flex justify-center mb-4">
                        <Mail className="w-16 h-16 text-indigo-600" />
                    </div>

                    <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                        Enter Code
                    </h1>
                    <p className="text-gray-600 mb-2 text-center">
                        We sent a 8-digit code to
                    </p>
                    <p className="text-gray-900 font-semibold text-center mb-6">{email}</p>

                    <form onSubmit={handleVerifyOtp} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                6-Digit Code
                            </label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 8))}
                                placeholder="000000"
                                maxLength={8}
                                disabled={loading}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed text-center text-3xl tracking-widest font-mono"
                                required
                            />
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <p className="text-xs text-yellow-700">
                                ⏰ Code expires in 10 minutes. Check your spam folder if you don't see it.
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || otp.length !== 8}
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            {loading ? 'Verifying...' : 'Verify Code'}
                        </button>
                    </form>

                    <div className="mt-6 space-y-2">
                        <button
                            onClick={() => {
                                setStep('email');
                                setOtp('');
                            }}
                            className="w-full text-indigo-600 hover:text-indigo-700 font-semibold text-sm"
                        >
                            Try Another Email
                        </button>

                        <button
                            onClick={handleRequestOtp}
                            disabled={loading}
                            className="w-full text-gray-600 hover:text-gray-700 font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Resend Code
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ============ STEP 3: PASSWORD RESET ============
    if (step === 'password') {
        return (
            <div className="min-h-screen w-full bg-[#161614] flex items-center justify-center px-4 py-12">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                    <div className="flex justify-center mb-4">
                        <Lock className="w-16 h-16 text-indigo-600" />
                    </div>

                    <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                        Set New Password
                    </h1>
                    <p className="text-gray-600 mb-6 text-center">
                        Create a strong password for your account
                    </p>

                    <form onSubmit={handleResetPassword} className="space-y-4">
                        {/* New Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Enter new password"
                                    disabled={loading}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                            {newPassword && (
                                <p className="text-sm text-gray-600 mt-1">
                                    {newPassword.length >= 8 ? '✓' : '✗'} At least 8 characters
                                </p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm password"
                                    disabled={loading}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                            {confirmPassword && (
                                <p className="text-sm text-gray-600 mt-1">
                                    {newPassword === confirmPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
                                </p>
                            )}
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-xs text-blue-700">
                                🔒 Use a combination of uppercase, lowercase, numbers, and symbols for a strong password.
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || newPassword.length < 8 || newPassword !== confirmPassword}
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </form>

                    <p className="text-center text-gray-600 text-sm mt-6">
                        <button
                            onClick={() => router.push('/login')}
                            className="text-indigo-600 hover:text-indigo-700 font-semibold"
                        >
                            Back to Login
                        </button>
                    </p>
                </div>
            </div>
        );
    }
}