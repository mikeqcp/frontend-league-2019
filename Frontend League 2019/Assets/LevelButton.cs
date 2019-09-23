using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
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
        Debug.Log(levelNumber);
    }
}
