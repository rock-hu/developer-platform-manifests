module.exports = function (plop) {
  plop.setGenerator("domain", {
    description: "domain",
    prompts: [
      {
        type: "input",
        name: "category",
        message: "category",
      },
      {
        type: "input",
        name: "domain",
        message: "domain",
      },
    ],
    actions: [
      {
        type: "add",
        path: "manifests/domains/{{category}}/{{domain}}.yaml",
        templateFile: "mustushe/domain.hbs",
        force: false,
      },
    ],
  });

  plop.setGenerator("component", {
    description: "component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "name",
      },
      {
        type: "input",
        name: "type",
        message: "type",
      },
      {
        type: "input",
        name: "system",
        message: "system",
      },
      {
        type: "input",
        name: "owner",
        message: "owner",
      },
      {
        type: "input",
        name: "lifecycle",
        message: "lifecycle",
      },
    ],
    actions: [
      {
        type: "add",
        path: "manifests/components/{{type}}/{{lifecycle}}/{{system}}/{{name}}.yaml",
        templateFile: "mustushe/component.hbs",
        force: true,
      },
    ],
  });
  plop.setGenerator("group", {
    description: "group",
    prompts: [
      {
        type: "input",
        name: "team",
        message: "team",
      },
      {
        type: "input",
        name: "parent",
        message: "parent",
      },
    ],
    actions: [
      {
        type: "add",
        path: "manifests/groups/{{parent}}-{{team}}-team.yaml",
        templateFile: "mustushe/group.hbs",
        force: false,
      },
    ],
  });
  plop.setGenerator("adr", {
    description: "architecture-decision-record",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "title",
      },
      {
        type: "input",
        name: "version",
        message: "version",
      },
    ],
    actions: [
      {
        type: "add",
        path: "docs/adrs/{{title}}-{{version}}.md",
        templateFile: "mustushe/architecture-decision-records.hbs",
        force: true,
      },
    ],
  });

  plop.setGenerator("article", {
    description: "article - markdown",
    prompts: [
      {
        type: "input",
        name: "chapter",
        message: "chapter",
      },
      {
        type: "input",
        name: "article",
        message: "article",
      },
    ],
    actions: [
      {
        type: "add",
        path: "docs/{{chapter}}/{{article}}.md",
        templateFile: "mustushe/article.hbs",
        force: true,
      },
    ],
  });


  
  plop.setGenerator("bian-semantic", {
    description: "backstage.kind.API - bian-semantic",
    prompts: [
      {
        type: "input",
        name: "version",
        message: "version",
      },      
      {
        type: "input",
        name: "artifact",
        message: "artifact",
      }
    ],
    actions: [
      {
        type: "add",
        path: "manifests/openapis/bian-semantic/{{artifact}}.yaml",
        templateFile: "mustushe/bian-semantic.hbs",
        force: true,
      },
    ],
  });  

  plop.setGenerator("backstage-component", {
    description: "backstage-component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "metadata.name",
      },
      {
        type: "input",
        name: "apiVersion",
        message: "metadata.apiVersion",
      },
      {
        type: "input",
        name: "description",
        message: "metadata.description",
      },
      {
        type: "input",
        name: "type",
        message: "spec.type - service,website,library",
      },
      {
        type: "input",
        name: "lifecycle",
        message: "spec.lifecycle - experimental,production,deprecated",
      },
      {
        type: "input",
        name: "owner",
        message: "spec.owner",
      },
      {
        type: "input",
        name: "system",
        message: "spec.system",
      },
      // {
      //     type: 'input',
      //     name: 'subcomponentOf',
      //     message: 'spec.subcomponentOf'
      // },
      // {
      //     type: 'input',
      //     name: 'consumesApis',
      //     message: 'spec.consumesApis'
      // },
      // {
      //     type: 'input',
      //     name: 'dependsOn',
      //     message: 'spec.dependsOn'
      // },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{type}}/{{lifecycle}}/{{name}}-{{apiVersion}}.yaml",
        templateFile: "mustushe/component.yaml",
        force: true,
      },
    ],
  });
  plop.setGenerator("backstage-system", {
    description: "backstage.kind.System",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "name",
      },      
      {
        type: "input",
        name: "owner",
        message: "owner",
      },
      {
        type: "input",
        name: "domain",
        message: "domain",
      },
      {
        type: "input",
        name: "type",
        message: "type",
      }            
    ],
    actions: [
      {
        type: "add",
        path: "manifests/systems/{{name}}.yaml",
        templateFile: "mustushe/system.hbs",
        force: true,
      },
    ],
  });    
};
