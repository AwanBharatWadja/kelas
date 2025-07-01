"use client";

import React, { useState } from 'react';
import { Send, User, Mail, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from '../hooks/useForm';

interface ContactFormProps {
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const validationRules = {
    name: (value: string) => {
      if (!value.trim()) return 'Nama wajib diisi';
      if (value.trim().length < 2) return 'Nama minimal 2 karakter';
      return undefined;
    },
    email: (value: string) => {
      if (!value.trim()) return 'Email wajib diisi';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Format email tidak valid';
      return undefined;
    },
    message: (value: string) => {
      if (!value.trim()) return 'Pesan wajib diisi';
      if (value.trim().length < 10) return 'Pesan minimal 10 karakter';
      if (value.trim().length > 1000) return 'Pesan maksimal 1000 karakter';
      return undefined;
    }
  };

  const handleSubmit = async (values: Record<string, string>) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Pesan berhasil dikirim! Kami akan segera merespons.');
        reset();
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setSubmitMessage('');
        }, 5000);
      } else {
        throw new Error(data.message || 'Gagal mengirim pesan');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Terjadi kesalahan saat mengirim pesan');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit: onSubmit,
    reset
  } = useForm({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationRules,
    onSubmit: handleSubmit
  });

  const getFieldError = (fieldName: string) => {
    return touched[fieldName] && errors[fieldName] ? errors[fieldName] : undefined;
  };

  return (
    <div className={`backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 group ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-400 transition-colors">
          Kirim Pesan
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full group-hover:w-32 transition-all duration-500"></div>
      </div>

      {/* Status Messages */}
      {submitStatus !== 'idle' && (
        <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
          submitStatus === 'success' 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-700'
            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-700'
        }`}>
          {submitStatus === 'success' ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span className="text-sm font-medium">{submitMessage}</span>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="relative group">
          <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
            getFieldError('name') 
              ? 'text-red-400' 
              : 'text-gray-400 group-focus-within:text-cyan-400'
          }`} />
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            className={`w-full pl-12 pr-4 py-4 bg-white/80 dark:bg-white/5 border rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-white dark:hover:bg-white/10 ${
              getFieldError('name')
                ? 'border-red-400 focus:border-red-400 focus:bg-red-50 dark:focus:bg-red-900/10'
                : 'border-gray-300 dark:border-white/20 focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10'
            }`}
            required
            disabled={isSubmitting}
          />
          {getFieldError('name') && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
              <AlertCircle size={16} className="mr-1" />
              {getFieldError('name')}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="relative group">
          <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
            getFieldError('email') 
              ? 'text-red-400' 
              : 'text-gray-400 group-focus-within:text-cyan-400'
          }`} />
          <input
            type="email"
            placeholder="Email Address"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className={`w-full pl-12 pr-4 py-4 bg-white/80 dark:bg-white/5 border rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-white dark:hover:bg-white/10 ${
              getFieldError('email')
                ? 'border-red-400 focus:border-red-400 focus:bg-red-50 dark:focus:bg-red-900/10'
                : 'border-gray-300 dark:border-white/20 focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10'
            }`}
            required
            disabled={isSubmitting}
          />
          {getFieldError('email') && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
              <AlertCircle size={16} className="mr-1" />
              {getFieldError('email')}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="relative group">
          <MessageCircle className={`absolute left-4 top-6 w-5 h-5 transition-colors ${
            getFieldError('message') 
              ? 'text-red-400' 
              : 'text-gray-400 group-focus-within:text-cyan-400'
          }`} />
          <textarea
            placeholder="Tulis pesan Anda di sini..."
            value={values.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            className={`w-full pl-12 pr-4 py-4 bg-white/80 dark:bg-white/5 border rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-white dark:hover:bg-white/10 resize-none ${
              getFieldError('message')
                ? 'border-red-400 focus:border-red-400 focus:bg-red-50 dark:focus:bg-red-900/10'
                : 'border-gray-300 dark:border-white/20 focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10'
            }`}
            rows={4}
            required
            disabled={isSubmitting}
          />
          {getFieldError('message') && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
              <AlertCircle size={16} className="mr-1" />
              {getFieldError('message')}
            </p>
          )}
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-right">
            {values.message.length}/1000 karakter
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none flex items-center justify-center space-x-2 group"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Mengirim...</span>
            </>
          ) : (
            <>
              <span>Kirim Pesan</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;