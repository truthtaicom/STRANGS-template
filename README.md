## STRANGS Template with:
- ✅ **S**torybook
- ✅ **T**ypeScript
- ✅ **R**eactJS
- ✅ **A**pollo
- ✅ **N**extJS
- ✅ **G**raphQL
- ✅ **S**tyledComponent
- ⭐️ DOCKER

## Getting Started

### How to install
```
npx create-react-app <your-project-name> --template strangs
```

### To run DEV Mode the server in local:

```
yarn OR npm install
```

```
yarn dev OR npm run dev 
```


### To run DEV Mode the server in docker:
1. Change Dockerfile
```bash
....
# For Dev mode: 
#     CMD "yarn" "dev"
# For Prod mode: 
#     CMD "yarn" "start"
CMD "npm" "run" "dev"
```

2. Run command
```bash
docker-compose up --build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
