Agrobank Business Copilot
---

### 1. Muammo (The Problem)

**The Context: The "Digital Divide" in Uzbek Business**
While Uzbekistan's banks and enterprises are modernizing, the human element remains traditional.
* **The Skill Gap:** Many business owners and managers lack advanced digital skills. They find CRMs, complex interfaces, and cloud file systems intimidating or frustrating.
* **The "Phone & Voice" Culture:** Business doesn't happen in Jira or email; it happens on the phone and in Telegram. Deals are made via "Tanish-Bilish" (personal connections).
* **The Disconnect:** A manager agrees to a deal via a 30-second voice note while driving, but the formal paperwork (contracts, acts) lags behind, leading to compliance risks for banks and lost data for companies.
* **Result:** Vital business data is trapped in audio messages and chat logs, invisible to the company's formal systems.

---

### 2. Yechim (The Solution)

**Your AI Partner in Telegram & MS Teams**
We don't ask users to learn new software. We bring the software to where they already are.
* **Voice-First Interface:** Just hold the microphone button in Telegram.
    * *User (Voice):* "GreenStar bilan tuzilgan shartnomani top va menga jo'nat." (Find the contract with GreenStar and send it to me.)
    * *AI:* Understands Uzbek voice, queries the database, and replies with the file.
* **From "Gap" to "Document":**
    * *User (Voice):* "Ertaga 'TechProm' bilan uchrashuv bor, ularga standart xizmat ko'rsatish shartnomasini tayyorla, narxi 100 million so'm."
    * *AI:* Pulls the template, fills in the details, saves it to OneDrive, and sends the PDF back to the chat ready for forwarding.
* **Omnichannel Support:** Works seamlessly in **Telegram** (for mobility) and **MS Teams** (for corporate banking environments).

---

### 3. Jamoa (The Team)


* **[Azizkhon Ishankhonov] – System Architect & Backend && AI**
    * *Focus:* Secure API integration (MCP), .NET Core, Cloud, Architecture
* **[Makhmud Khamdamov] – Full-stack Developer**
    * *Focus:* CRM & Banking integration
---

### 4. Nima uchun biz? (Why Us?)

- We understand problem & know solution
- we have expertise building such solutions in different domain but for business
- we have prototype
- we know how to promote this solutions to customers

---

### 5. Yo'l xaritasi (Roadmap)

* **Idea (Completed):**
    * Validated the pain point: Managers hate typing documents but love sending voice notes.
    * Designed MCP architecture for secure file access.
* **Prototype (Current Status):**
    * Telegram Bot connected to the Core Assistant.
    * **Voice-to-Text (STT)** integration working for basic commands.
    * Document retrieval from OneDrive via chat commands.
* **MVP (Target for Demo):**
    * Full support for **Uzbek Voice** commands.
    * "Deep Delta" (Document Comparison) results delivered as a text summary in Chat.
    * Auto-generation of a simple contract from a voice prompt.
* **Launched (Future):**
    * Integration with local Uzbek banking systems (via API).
    * Support for "dialects" and mixed language (Uzbek/Russian) typical in local business.
    * Enterprise-grade security audit for banking compliance.

---

### 6. Amalga oshirish (Implementation Plan)

1. Idea → Prototype
Определение функционала
Архитектура (Azure + CRM + RAG)
Быстрый чат-прототип with minmal functionality

2. MVP
Генерация договоров/шаблонов
Проверка документов
Интеграция с CRM (реквизиты, сохранение)
PDF/Word/Excel экспорт
История документов

3. Production
Кастомные шаблоны
Улучшенная проверка документов
Роли пользователей + безопасность
Web-панель управления

4. Launched
CI/CD (Azure DevOps)
Мониторинг и логирование
Масштабирование и поддержка
