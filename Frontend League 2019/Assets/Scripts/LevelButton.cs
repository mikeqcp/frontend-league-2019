using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class LevelButton : MonoBehaviour
{
    [SerializeField]
    private int levelNumber;

    void Start()
    {
        var button = GetComponent<Button>();
        button.onClick.AddListener(HandleClicked);
        button.GetComponentInChildren<Text>().text = levelNumber.ToString();
    }

    private void HandleClicked()
    {
        var parameters = new LoadSceneParameters(LoadSceneMode.Single);
        SceneManager.sceneLoaded += this.OnSceneLoaded;
        SceneManager.LoadScene("Level", parameters);
    }

    private void OnSceneLoaded(Scene scene, LoadSceneMode mode)
    {
        SceneManager.sceneLoaded -= this.OnSceneLoaded;
        foreach (var rootEl in scene.GetRootGameObjects())
        {
            var lvlManager = rootEl.GetComponentInChildren<LevelSetup>();
            if (lvlManager)
            {
                lvlManager.SetupScene(levelNumber);
            }
        }
    }
}
