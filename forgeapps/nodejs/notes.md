To check if you have the Node.js LTS (Long-Term Support) version installed, follow these steps:

### 1. **Check the Installed Version**
   Open your terminal or command prompt and run:

   ```bash
   node -v
   ```

   This will output the installed version of Node.js, such as `v18.17.0`.

---

### 2. **Verify if It's an LTS Version**
   Compare the version against the [Node.js LTS schedule](https://nodejs.org/en/about/releases/). LTS versions are marked with "LTS" on the Node.js website and are typically even-numbered major versions (e.g., 18.x, 16.x).

---

### 3. **Alternative: Use `nvm` to Check**
   If you use Node Version Manager (NVM), you can check the installed LTS version directly:

   ```bash
   nvm list
   ```

   This will show all the Node.js versions installed on your system, including the active one.

   To list all available LTS versions:

   ```bash
   nvm ls-remote --lts
   ```

---

### 4. **Reinstall or Switch to LTS Version**
   If you find that you’re not on an LTS version and want to switch, you can download the latest LTS version from the [Node.js website](https://nodejs.org) or use `nvm`:

   ```bash
   nvm install --lts
   nvm use --lts
   ```

Let me know if you need further assistance!
