import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-96 mb-12 rounded-xl overflow-hidden shadow-xl">
            <Image 
              src="/images/666c2bbb-f169-4240-a613-f9460450b96b.png" 
              alt="About Author" 
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-2xl font-bold">About the Author</h2>
              <p className="text-sm opacity-90">Senior BI Developer | AI/ML Enthusiast | Data Scientist</p>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              About the Author
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Meet Venkateshwari Narayanan, the mind behind Bridging AI and BI
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="prose lg:prose-xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500 mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-blue-700">Hi, I'm Venkateshwari Narayanan</h2>
              <p className="mb-6 text-lg">
                🚀 Senior BI Developer | AI/ML Enthusiast | Data Scientist
              </p>
              <p className="text-lg">
                I'm passionate about exploring the intersection of Business Intelligence and Artificial Intelligence, 
                sharing insights and experiences from the field to help organizations leverage these technologies 
                for better decision-making and business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">About Me</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span>🎓 Pursuing a Master's in Artificial Intelligence at Loughborough University</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span>📊 7+ years of experience in Business Intelligence (BI), Data Analytics & AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span>🤖 Passionate about Machine Learning, Deep Learning, AI Regulation & XAI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span>🔍 Exploring Federated Learning, Transfer Learning, Retrieval-Augmented Generation (RAG) & AI-driven Automation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">Work Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-700">Senior BI Developer / Team Lead @ Barclays Global Shared Services</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                        <span>Developed AI-powered analytics solutions integrating Python & Tableau (TabPy)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                        <span>Built interactive dashboards in Tableau, SAP Analytics Cloud (SAC), and Power BI</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                        <span>Designed automated financial insights pipelines, reducing reporting time by 30%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                        <span>Implemented secure data access controls (RLS, OAuth APIs) for enterprise BI</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700">BI Developer @ Capgemini</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                        <span>Created ETL pipelines & automated BI workflows for enterprise decision-making</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                        <span>Led cross-functional teams in deploying AI-driven customer insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-purple-700">Current Projects</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                  <span>AI-Powered Deep Research Assistant – Vector search, hybrid search, and XAI for document retrieval</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                  <span>Chatbot Integration with WhatsApp (n8n & OpenAI) – Context-aware AI chatbot for business automation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                  <span>Credit Score Prediction Model – ML-driven risk assessment using financial data</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                  <span>AI-Driven Financial Document Retrieval System – RAG-based intelligent search engine</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                  <span>Customer Segmentation & Personalized Recommendation – Using ML clustering & recommendation models</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-700">BI & Data Visualization</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>Tableau</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>SAP BW</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>Power BI</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>Alteryx</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Machine Learning</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>Scikit-learn</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>XGBoost</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>PyTorch</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>TensorFlow</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">AI & NLP</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>LLMs</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>RAG</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>LangChain</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>OpenAI</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">Cloud & Deployment</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>AWS SageMaker</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>Azure</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>Google Cloud</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>Docker</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">Let's Connect!</h3>
                <p className="mb-4">
                  I'm always open to collaboration on AI/ML, BI, and research projects!
                </p>
                <div className="space-y-3">
                  <a 
                    href="https://www.linkedin.com/in/venkateshwari-narayanan-668661176/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span>LinkedIn - @venkateshwari-narayanan</span>
                  </a>
                  <a 
                    href="https://github.com/sv3112" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span>GitHub - @sv3112</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 