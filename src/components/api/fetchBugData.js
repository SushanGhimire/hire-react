import axios from "axios";

export const fetchBugData = async (
  setLoading,
  setDataList,
  setFilteredDataList,
  setLabels
) => {
  setLoading(true);
  try {
    const res = await axios.get(
      "https://api.github.com/repos/facebook/react/issues"
    );
    const fetchedData = res.data;
    // console.log(fetchedData);
    setDataList(fetchedData);
    setFilteredDataList(fetchedData);
    const bugLevels = [];
    fetchedData.forEach((data) => {
      data.labels.forEach((label) => {
        bugLevels.push(label.name);
      });
    });
    setLabels(bugLevels);
    setLoading(false);
  } catch (err) {
    setLoading(false);
    console.log(err);
  }
};
