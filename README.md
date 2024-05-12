# Confirm presence

### Confirmação de presença de convidados em eventos

### **API REST**

#### Endpoints

- `GET: /list` => lista todos os convidados
- `POST: /create` => **body: { name: string }** | cria um novo convidado
- `PUT: /confirm` => **body: { id: string }** | confirma a presença do convidado

## Para contribuir

- Seguir a arquitetura do projeto ( **Arquitetura limpa** )
- Use o **padrão de nomenclatura** dos arquivos, classes e interfaces
- Manter o **padrão do ESLINT**
- Criar **nova branch** com seu nome
- Os commits devem manter o padrão descrito pela **Conventional Commits**

## Instalação

### Pré-requisitos

- **Node.js**
- **Yarn package manager**

### Antes de executar

- **Carregue todos os módulos: `yarn install`**
- **Defina as variáveis de ambiente em _.env_**

### Executar

- `yarn build`
- `yarn prod`

- **Em desenvolvimento:** `yarn dev`
