const orangeRole = {
  name: `orange`,
  doc: `A role for Jupyter orange text`,
  body: {
    type: "myst",
  },
  run(data) {
    const div = {
      type: "span",
      style: { color: "#e07330" },
      children: data.body,
    };
    return [div];
  },
};

const plugin = {
  name: "GeoJupyter extensions",
  roles: [orangeRole],
};

export default plugin;
