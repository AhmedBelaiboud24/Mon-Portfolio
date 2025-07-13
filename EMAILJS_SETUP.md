# 📧 Configuration EmailJS - Guide Complet

## 🚀 Étapes de Configuration

### 1. **Créer un Compte EmailJS**
- Allez sur [emailjs.com](https://www.emailjs.com/)
- Créez un compte gratuit (200 emails/mois)
- Confirmez votre email

### 2. **Configurer le Service Email**
1. Dans le dashboard EmailJS, cliquez sur **"Add New Service"**
2. Choisissez votre fournisseur email :
   - **Gmail** (recommandé)
   - **Outlook**
   - **Yahoo**
   - Ou autre
3. Suivez les instructions pour connecter votre email
4. Notez votre **Service ID** (ex: `service_xxxxxxx`)

### 3. **Créer le Template Email**
1. Cliquez sur **"Email Templates"** → **"Create New Template"**
2. **Template ID** : `template_contact`
3. **Template Name** : `Portfolio Contact Form`
4. Copiez le contenu du fichier `email-template.html` dans l'éditeur
5. Ou utilisez ce template simple :

```html
<h2>Nouveau message de {{from_name}}</h2>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Sujet:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<hr>
<p><small>Envoyé le {{sent_date}} à {{sent_time}}</small></p>
```

### 4. **Obtenir la Clé Publique**
1. Allez dans **"Account"** → **"General"**
2. Copiez votre **Public Key**

### 5. **Mettre à Jour la Configuration**
Modifiez le fichier `src/services/emailService.js` :

```javascript
const EMAIL_CONFIG = {
    SERVICE_ID: 'votre_service_id',     // Remplacez par votre Service ID
    TEMPLATE_ID: 'template_contact',    // Votre Template ID
    PUBLIC_KEY: 'votre_public_key'      // Votre Public Key
};
```

## 🎨 **Template Email Inclus**

Le fichier `email-template.html` contient un template magnifique avec :
- ✨ Design moderne et responsive
- 🎨 Couleurs cohérentes avec votre portfolio
- 📱 Compatible mobile
- 🔍 Informations détaillées du contact

## 🔧 **Variables Disponibles**

Dans votre template EmailJS, vous pouvez utiliser :
- `{{from_name}}` - Nom du contact
- `{{from_email}}` - Email du contact  
- `{{subject}}` - Sujet du message
- `{{message}}` - Contenu du message
- `{{sent_date}}` - Date d'envoi
- `{{sent_time}}` - Heure d'envoi
- `{{reply_to}}` - Email de réponse
- `{{page_url}}` - URL de la page

## 🚨 **Important**

1. **Sécurité** : La clé publique peut être exposée côté client
2. **Limites** : 200 emails/mois en gratuit
3. **Spam** : Configurez des filtres anti-spam si nécessaire
4. **Test** : Testez l'envoi avant la mise en production

## 🎯 **Avantages vs Formspree**

✅ **EmailJS**
- Template personnalisé
- Contrôle total du design
- Intégration directe
- 200 emails/mois gratuits

❌ **Formspree**  
- Template basique
- Moins de personnalisation
- 50 emails/mois gratuits

## 🔄 **Test du Formulaire**

Une fois configuré :
1. Remplissez le formulaire sur votre site
2. Vérifiez la réception de l'email
3. Testez la réponse automatique
4. Validez le design du template

---

**🚀 Votre formulaire de contact est maintenant professionnel et entièrement personnalisé !**
