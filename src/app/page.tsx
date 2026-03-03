"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header/Navigation */}
            <header className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Logo variant="horizontal" width={180} />
                    <Button asChild>
                        <a href="mailto:j-otsu@charoen.jp?subject=お問い合わせ&body=お名前：%0D%0A会社名：%0D%0Aメールアドレス：%0D%0A電話番号：%0D%0A%0D%0Aお問い合わせ内容：%0D%0A">
                            お問い合わせ
                        </a>
                    </Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-br from-charoen-gray via-white to-charoen-secondary/5">
                <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
                    <div className="text-center max-w-4xl mx-auto relative z-10">

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            どんなビジネスでも
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-charoen-primary to-charoen-accent">PRは簡単にできる</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                            経験豊富なインフルエンサーが
                            <br className="md:hidden" />
                            あなたのサービスを多くの人に届けます
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-charoen-secondary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-charoen-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-charoen-primary/5 rounded-full blur-3xl"></div>
            </section>


            {/* CTA Section */}
            <section id="contact" className="relative py-28 bg-linear-to-br from-charoen-primary via-charoen-accent to-charoen-primary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <span className="text-sm font-semibold tracking-wide">お問い合わせ</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        まずはお気軽にご相談ください
                    </h2>
                    <p className="text-xl text-white/95 mb-10 leading-relaxed">
                        ご不明な点やご要望など、どんなことでもお問い合わせください
                        <br />
                        専門スタッフが丁寧にご対応いたします
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="text-base bg-white text-charoen-primary hover:bg-charoen-secondary hover:text-white border-2 border-white transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                            asChild
                        >
                            <a href="mailto:j-otsu@charoen.jp?subject=お問い合わせ&body=お名前：%0D%0A会社名：%0D%0Aメールアドレス：%0D%0A電話番号：%0D%0A%0D%0Aお問い合わせ内容：%0D%0A">
                                お問い合わせ
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Company Info Section */}
            <section className="py-20 bg-charoen-gray">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            会社概要
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <table className="w-full">
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-8 py-6 bg-gray-50 font-semibold text-gray-900 w-1/3">
                                        会社名
                                    </td>
                                    <td className="px-8 py-6 text-gray-700">
                                        Charoen株式会社
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-6 bg-gray-50 font-semibold text-gray-900 w-1/3">
                                        所在地
                                    </td>
                                    <td className="px-8 py-6 text-gray-700">
                                        〒106-0032 東京都港区六本木３丁目１６−１２ KSビル 5F
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-6 bg-gray-50 font-semibold text-gray-900 w-1/3">
                                        資本金
                                    </td>
                                    <td className="px-8 py-6 text-gray-700">
                                        １００万円
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-6 bg-gray-50 font-semibold text-gray-900 w-1/3">
                                        代表
                                    </td>
                                    <td className="px-8 py-6 text-gray-700">
                                        大津潤
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <Logo variant="horizontal-white" width={150} />
                            <p className="text-sm text-gray-400 mt-4">
                                インフルエンサーマーケティング
                                <br />
                                プラットフォーム
                            </p>
                        </div>
                        <div className="text-center md:text-right text-sm text-gray-400">
                            <p className="mb-2">Charoen株式会社</p>
                            <p>〒106-0032 東京都港区六本木３丁目１６−１２ KSビル 5F</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                        <p>&copy; 2026 Charoen. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
